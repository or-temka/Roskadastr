import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native'
import 'react-native-get-random-values'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import { useEffect, useRef, useState } from 'react'
import Input from '../components/Input'
import SendMessageSVG from '../components/svg/SendMessageSVG'
import PageForUser from './PageForUser'

import { v4 as uuidv4 } from 'uuid'
import axios from '../axios'
import { getUserToken } from '../utils/userTokenStorage'

export default function Messages({ navigation }) {
  const [isLoading, setIsLoading] = useState(true)

  const [messages, setMessages] = useState()
  const [messageTextInput, setMessageTextInput] = useState('')
  if (messageTextInput === '\n') {
    setMessageTextInput('')
  }

  useEffect(() => {
    const fetchUserMessages = async () => {
      try {
        const { data } = await axios.get('/user/me', {
          headers: {
            Authorization: await getUserToken(),
          },
        })

        setMessages(data.messages)

        setIsLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUserMessages()
  }, [])

  function sendMessageHandler() {
    setMessageTextInput('')
    const messagesArray = [...messages]
    const newMsg = {
      id: uuidv4(),
      iIsSender: true,
      messageText: messageTextInput,
    }
    const disptachMessageServer = async () => {
      try {
        return await axios.post(
          '/messages',
          {
            iIsSender: newMsg.iIsSender,
            messageText: newMsg.messageText,
          },
          {
            headers: {
              Authorization: await getUserToken(),
            },
          }
        )
      } catch (err) {
        console.log(err)
      }
    }
    disptachMessageServer()
    messagesArray.push(newMsg)
    setMessages(messagesArray)
  }

  useEffect(scrollToBottom, [messages, isLoading])

  // move to end scrollView
  const scrollViewRef = useRef()
  function scrollToBottom() {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true })
    }
  }

  if (isLoading) {
    return (
      <PageForUser navigation={navigation}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      </PageForUser>
    )
  }

  return (
    <PageForUser navigation={navigation}>
      <View style={styles.messages}>
        {/* Msg send Input and button */}
        <KeyboardAvoidingView
          style={styles.messages__keyboardAvoiding}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 73 : 0}
        >
          <View style={styles.messages__messageInputContainer}>
            <Input
              value={messageTextInput}
              onChangeText={(value) => setMessageTextInput(value)}
              multiline={true}
              style={styles.messages__messageInput}
              placeholder="Напишите сообщение..."
            />
            <TouchableOpacity
              style={styles.messages__sendMessageButton}
              disabled={messageTextInput ? false : true}
              onPress={sendMessageHandler}
            >
              <SendMessageSVG active={messageTextInput ? true : false} />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        {/* Messages */}
        <ScrollView style={styles.messages__messagesScroll} ref={scrollViewRef}>
          {messages.map((message) => (
            <View
              style={[
                styles.messages__msgContainer,
                message.iIsSender
                  ? styles.messages__msgContainer_myMsg
                  : styles.messages__msgContainer_personMsg,
              ]}
              key={message.id}
            >
              <Text
                style={[
                  gStyles.smallText,
                  styles.messages__humanName,
                  message.iIsSender
                    ? styles.messages__humanName_you
                    : styles.messages__humanName_staf,
                ]}
              >
                {message.iIsSender ? 'Вы' : 'Сотрудник'}
              </Text>
              <Text
                style={[
                  gStyles.text,
                  styles.messages__text,
                  !message.iIsSender && styles.messages__text_staf,
                ]}
              >
                {message.messageText}
              </Text>
            </View>
          ))}

          <View style={{ height: 40 }}></View>
        </ScrollView>
      </View>
    </PageForUser>
  )
}

const styles = StyleSheet.create({
  messages: {
    position: 'absolute',
    bottom: 49,
    display: 'flex',
    flexDirection: 'column-reverse',
    backgroundColor: colorStyles.backgroundFocus,
    width: '100%',
    height: '100%',
  },
  messages__keyboardAvoiding: {},
  messages__messageInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colorStyles.choice,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  messages__messageInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: colorStyles.border,
    borderRadius: 5,
  },
  messages__messagesScroll: {
    padding: 10,
  },
  messages__sendMessageButton: {
    height: 30,
    width: 30,
  },
  messages__msgContainer: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 30,

    maxWidth: '70%',
  },
  messages__msgContainer_myMsg: {
    backgroundColor: colorStyles.background,
    alignSelf: 'flex-start',
  },
  messages__msgContainer_personMsg: {
    backgroundColor: colorStyles.blue,
    alignSelf: 'flex-end',
  },
  messages__humanName: {
    position: 'absolute',
    top: -15,
    color: colorStyles.text.linkBlue,
  },
  messages__humanName_you: {
    left: 10,
  },
  messages__humanName_staf: {
    right: 10,
  },
  messages__text: {},
  messages__text_staf: {
    color: colorStyles.text.textReverse,
  },
})

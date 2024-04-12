import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native'
import gStyles from '../gStyles'
import { colorStyles } from '../variables'
import SplitLine from '../components/SplitLine'
import BackButton from '../components/BackButton'
import serviceTypes from '../data/serviceTypes'
import ModalConfirm from '../components/ModalConfirm'
import { useState } from 'react'
import PageForUser from './PageForUser'
import { getUserToken } from '../utils/userTokenStorage'
import axios from '../axios'

export default function ServiceAdd({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [choosedToDoId, setChoosedToDoId] = useState()

  function confirmModalHandler(toDoId) {
    // console.log(toDoId);
    // console.log(serviceType);
    createNewService(toDoId)
    setModalVisible(false)
  }
  function cancelModalHandler() {
    setModalVisible(false)
  }

  function openModalFromServiceToDo(toDoId) {
    setChoosedToDoId(toDoId)
    setModalVisible(true)
  }

  const { serviceTypeId } = route.params
  const serviceType = serviceTypes.find(
    (serviceType) => serviceType.id === serviceTypeId
  )

  const createNewService = async (toDoId) => {
    try {
      const serviceToDoText = serviceType.toDo[toDoId - 1].text
      const serviceTypeName = serviceType.name

      await axios.post(
        '/service',
        {
          name: `${serviceTypeName} [${serviceToDoText}]`,
          status: 'active',
          branchAddress: 'ул. Оплеснина, д. 7',
          city: 'г. Сыктывкар',
          toHave: 'Паспорт',
          howToGo:
            'Здание находится на пересечение ул. Оплеснина и ул. Дубинина',
        },
        {
          headers: {
            Authorization: await getUserToken(),
          },
        }
      )

      navigation.reset({
        routes: [{ name: 'services' }],
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <PageForUser navigation={navigation}>
      <ScrollView>
        <View style={styles.serviceAdd}>
          <BackButton
            backNamePage="chooseServiceForAdd"
            navigation={navigation}
          />
          <Text style={[gStyles.h4, styles.serviceAdd__label]}>
            {serviceType.name}
          </Text>
          <SplitLine style={styles.serviceAdd__splitLine} />
          <Text style={gStyles.text}>
            от {serviceType.price.from} ₽ до {serviceType.price.to} ₽
          </Text>
          {serviceType.toDo.map((toDo) => (
            <TouchableOpacity
              style={styles.serviceAdd__toDo}
              key={toDo.id}
              onPress={() => openModalFromServiceToDo(toDo.id)}
            >
              <Text style={[gStyles.h6, styles.serviceAdd__toDoLabel]}>
                {toDo.text}
              </Text>
              {toDo.to.map((toDoTo) => (
                <Text style={gStyles.lightText} key={toDoTo.id}>
                  {toDoTo.name}:{' '}
                  <Text style={gStyles.text}>
                    от {toDoTo.price.from} ₽ до {toDoTo.price.to} ₽
                  </Text>
                </Text>
              ))}
            </TouchableOpacity>
          ))}
        </View>
        <View style={gStyles.emptyField}></View>
      </ScrollView>
      {modalVisible && (
        <ModalConfirm
          label="Вы уверены, что хотите создать данную услугу?"
          visible={modalVisible}
          confirmHandler={() => confirmModalHandler(choosedToDoId)}
          confirmBtnText="Да, создать"
          cancelHandler={cancelModalHandler}
        />
      )}
    </PageForUser>
  )
}

const styles = StyleSheet.create({
  serviceAdd: {
    backgroundColor: colorStyles.backgroundFocus,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 20,
  },
  serviceAdd__splitLine: {
    paddingHorizontal: 0,
  },
  serviceAdd__label: {
    color: colorStyles.text.linkBlue,
  },
  serviceAdd__toDo: {
    backgroundColor: colorStyles.choice,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    marginTop: 10,
  },
  serviceAdd__toDoLabel: {
    marginBottom: 5,
  },
})

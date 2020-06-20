/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { actFetchCart } from '../actions/index';
import { connect } from 'react-redux';
import { Cart } from '../utils/cart';

export function ModalAmount(props) {
  const [state, setState] = useState(1);
  const btnOk = async () => {
    const tmp = await Cart.addToCart({
      ...props.item2,
      quantity: state,
    });
    props.fetchCart(tmp);
    cancelModal();
    alert('Thêm giỏ hàng thành công');
  };
  const cancelModal = () => {
    props.handleModalAmount();
    setState(1);
  };

  console.log(props.cart);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisibleAmount2.modalVisibleAmount}
      onRequestClose={() => {}}
    >
      <View style={[styles.flex1, styles.containerModal]}>
        <View style={styles.mainContentModal}>
          <View style={[styles.row, { padding: 5 }]}>
            <Text style={[styles.flex1, styles.coupon]}>Số lượng</Text>
            <TouchableOpacity
              style={{ backgroundColor: 'white' }}
              onPress={() => {
                props.handleModalAmount();
                setState(1);
              }}
            >
              <FontAwesome5 name="times" size={20} />
            </TouchableOpacity>
          </View>
          <View style={[styles.centerView, styles.row, styles.containerAmount]}>
            <TouchableOpacity
              onPress={() => {
                if (state > 1) {
                  setState(state - 1);
                }
              }}
            >
              <FontAwesome5 size={25} name="minus" />
            </TouchableOpacity>
            <Text style={styles.fontText}>{state.toString()}</Text>
            <TouchableOpacity
              onPress={() => {
                setState(state + 1);
              }}
            >
              <FontAwesome5 size={25} name="plus" />
            </TouchableOpacity>
          </View>
          <View style={[styles.row, { flex: 1, padding: 10 }]}>
            <TouchableOpacity
              onPress={() => {
                cancelModal();
              }}
              style={[styles.flex1, styles.centerView]}
            >
              <Text style={[styles.fontText, styles.flex1]}>Hủy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={btnOk}
              style={[styles.flex1, styles.centerView]}
            >
              <Text style={[styles.fontText, styles.flex1]}>Đồng ý</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchCart: (cart) => {
      dispatch(actFetchCart(cart));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalAmount);

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContentModal: {
    width: '100%',
    borderRadius: 12,
    height: '20%',
    backgroundColor: 'white',
    borderColor: '#edf1ea',
    paddingHorizontal: 15,
  },
  containerModal: {
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
  coupon: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fontText: {
    fontSize: 20,
    paddingHorizontal: 25,
  },
  containerAmount: {
    padding: 15,
  },
});

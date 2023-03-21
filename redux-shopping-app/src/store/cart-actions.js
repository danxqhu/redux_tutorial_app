import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchData = () => {
  return async dispatch => {
    const fetchHandler = async () => {
      const res = await fetch('https://yth2veim6m.hk.aircode.run/redux_tutorial_cart_get');

      const data = await res.json();
      console.log('data', data);
      return data;
    };
    try {
      const cartData = await fetchHandler();
      console.log('cartData:', cartData);
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending Request Failed',
          type: 'error',
        }),
      );
    }
  };
};

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: 'Sending Request',
        type: 'warning',
      }),
    );
    const sendRequest = async () => {
      const res = await fetch('https://yth2veim6m.hk.aircode.run/redux_tutorial_cart_put', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(cart),
      });
      const data = await res.json();
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sent Request To Database Successfully',
          type: 'success',
        }),
      );
      // console.log(data);
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: 'Sending Request Failed',
          type: 'error',
        }),
      );
    }
  };
};

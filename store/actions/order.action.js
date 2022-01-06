import API_URL from '../../constants/database';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_ORDER = 'CONFIRM_ORDER';

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (itemID) => ({
  type: REMOVE_ITEM,
  itemID,
});

export const confirmCart = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: CONFIRM_ORDER,
      status: 'loading',
    });

    const response = await fetch(`${API_URL}/ordenes.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date: Date.now(),
        items: payload,
      }),
    });

    const result = await response.json();

    dispatch({
      type: CONFIRM_ORDER,
      status: 'completed',
      orderID: result.name,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.message);
  }
};

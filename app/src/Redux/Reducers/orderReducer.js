import { ACTION_TYPES } from "../Actions/orderAction";

const initState = {
    pay: {
        itWasPaid: "",
        toPay: "",
        timeOFSub: "",
        quantOfsubscriptions: ""

    },
    product: "",
    user: {
        firstName: "",
        lastName: "",
        email: "",
        tel: ""
    }
}



const orderReducer = (order = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_ORDER:
            return {
                order: action.order
            }
        case ACTION_TYPES.POST_OORDER:
            return [...order, action.order];
        default:
            return order;
    }
};

export default orderReducer;

import { useEffect } from 'react'
import { getOrderDetail } from '../../../api';

const ViewOrderDetail = ({ selectedOrder, setVisibleOrderDialog }) => {

    const loadOrderDetails = () => {
        getOrderDetail(selectedOrder?.id).then((res) => {
            // console.log(res.data)
        });
    };


    useEffect(() => {
        loadOrderDetails();
    }, []);


    return (
        <div>ViewOrderDetail</div>
    )
}

export default ViewOrderDetail
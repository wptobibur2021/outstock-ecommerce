import { Store } from 'react-notifications-component';
const notifications = () => {
    const successNotify = () => {
        Store.addNotification({
            title: "Thank you!",
            message: "Successfully added notification",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }

    return { successNotify }
}

export default notifications;


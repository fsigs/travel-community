export default function Subscription(props) {
    return (
        <>
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-6 offset-md-3 ">
                    { (props.subscription.error) ? (
                        <div class="alert alert-danger" role="alert">
                            <h4 class="alert-heading">Failed!</h4>
                            <p>{props.subscription.error}</p>
                        </div>
                    ) : (
                        <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Success!</h4>
                            <p>Your subscription was successful. Welcome to the trip <b>{props.subscription.name}</b>!</p>
                        </div>
                    )
                    }  
                    </div>
                </div>
            </div>
        </>
    )
}

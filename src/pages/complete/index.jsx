import './index.scss'
import iconThanks from '../../assets/images/icon-thank-you.svg'

function Complete() {

    return (
        <section className="bg-white px-3 px-md-4 h-100 d-flex justify-content-center text-center" id="complete">
            <div className="jumbotron jumbotron-fluid bg-transparent my-auto mx-0">
                <div className="container">
                    <img src={iconThanks} alt="Thank you icon" />
                    <h4 className="font-tertiary-color font-weight-bold pt-3 pt-md-2">Thank you!</h4>
                    <p className="font-primary-color">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
                </div>
            </div>
        </section >
    )
}

export default Complete
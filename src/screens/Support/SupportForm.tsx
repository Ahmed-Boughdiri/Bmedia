import { Form } from "react-bootstrap";
import { Input, TextArea, Button } from "components";

const SupportForm = () =>(
    <div className="support-form-container">
        <div className="support-form">
            <div className="support-form-banner">
                <div className="support-form-banner-filter"></div>
            </div>
            <div className="support-form-wrapper">
                <div className="support-form-content">
                    <h1 className="support-form-title">
                        Support Form
                    </h1>
                    <Form>
                        <Input 
                            type="email"
                            placeholder="Your Email"
                        />
                        <Input 
                            type="text"
                            placeholder="Your Username"
                        />
                        <TextArea 
                            placeholder="Your Message"
                        />
                        <Button 
                            type="primary"
                            size="large"
                        >
                            SUBMIT
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
);

export default SupportForm;

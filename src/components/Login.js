import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Login = props => {

    console.log('props', props);

    const [client, setClient] = useState(props.client);

    return (
        <Container className="p-3">
            <h1>Login</h1>
            <h2>{client.name}</h2>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter your business email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
            </Form>
        </Container>
    )
};

export default Login;
import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { firebase } from "../../Firebase/Firebase";
import { Redirect } from "react-router-dom";
import ButtonLg from "../../SmallComponent/ButtonLg";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: { name: "", error: "" },
      password: { name: "", error: "" },
      email: { name: "", error: "" },
      confirm: { name: "", error: "" },
      error: "",
      loading: false,
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const [displayName, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirm, setConfirm] = useState("");
  // const [email, setEmail] = useState("");
  // const [error, setError] = useState("");
  // const [redirect, setRedirect] = useState("");
  // const [loading, setLoading] = useState(false);
  // const style = error ? "input--error" : "input--control";
  componentDidMount() {
    if (this.state.error) {
      this.setState({ loading: false });
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const { displayName, password, confirm, email } = this.state;
    this.setState({ loading: true });
    if (!displayName.name) {
      this.setState({ displayName: { error: "invalid display name" } });
    }
    if (password.name !== confirm.name) {
      this.setState({ confirm: { error: "Passwords are not the same" } });
    }
    if (password.name.length <= 6) {
      this.setState({
        password: {
          error: "passwords should be atleast 6 characters "
        }
      });
    }
    if (!password.name) {
      this.setState({ password: { error: "No password" } });
    }
    if (!email.name) {
      this.setState({ email: { error: "no Email" } });
    }
    if (!(!password.name || !email.name || password.name !== confirm.name)) {
      debugger;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          if (user) {
            this.setState({ redirect: true });
          }
        })
        .catch(error => {
          if (error.code !== "auth/network-request-failed") {
            this.setState({ error: error.message, loading: false });
            console.log(error.message);
          } else {
            this.setState({ error: "no Internet connection", loading: false });
          }
        });
      this.setState({
        password: { name: "" },
        confirm: { name: "" },
        displayName: { name: "" },
        email: { name: "" },
        loading: false
      });
    }
    this.setState({
      loading: false
    });
  }
  handleChange(e) {
    let value = e.target.name;
    this.setState({
      [value]: { name: e.target.value }
    });
  }

  render() {
    const {
      displayName,
      password,
      confirm,
      error,
      email,
      redirect,
      loading
    } = this.state;
    return (
      <Form className="signinform" onSubmit={this.handleSubmit}>
        {redirect && (
          <Redirect to={{ pathname: "/Home", state: displayName }} />
        )}
        <Form.Group>
          <Form.Label className="signin-form-name">Display Name</Form.Label>
          <Form.Control
            name="displayName"
            value={displayName.name}
            onChange={this.handleChange}
            className={displayName.error ? "input--error" : "input--control"}
            type="text"
          />
          {displayName.error && <p>{displayName.error}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label className="signin-form-name">Email</Form.Label>
          <Form.Control
            value={email.name}
            name="email"
            onChange={this.handleChange}
            className={email.error ? "input--error" : "input--control"}
            type="email"
          />
          {email.error && <p>{email.error}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label className="signin-form-name">Password</Form.Label>
          <Form.Control
            name="password"
            value={password.name}
            onChange={this.handleChange}
            className={password.error ? "input--error" : "input--control"}
            type="password"
          />
          {password.error && <p>{password.error}</p>}
        </Form.Group>
        <Form.Group>
          <Form.Label className="signin-form-name">Confirm Password</Form.Label>
          <Form.Control
            name="confirm"
            value={confirm.name}
            onChange={this.handleChange}
            className={confirm.error ? "input--error" : "input--control bgski"}
          />
          {confirm.error && <p>{confirm.error}</p>}
        </Form.Group>
        <ButtonLg
          small="true"
          disabled={loading && true}
          type="submit"
          title="submit"
        />

        {error && <Alert variant="danger">{error}</Alert>}
      </Form>
    );
  }
}

export default SignUpForm;

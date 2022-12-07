<template>
  <div class="login-box">
    <div class="login-logo">
      <b>{{ $store.state.app.name }}</b>
    </div>
    <div class="card">
      <div class="card-body login-card-body">
        <p class="login-box-msg">Silahkan login dengan akun Anda.</p>

        <Form @submit="handleLogin" :validation-schema="schema">
          <ErrorMessage name="uname" class="error-feedback text-danger" />
          <div class="input-group mb-3">
            <Field
              name="uname"
              type="text"
              class="form-control"
              placeholder="Username"
              v-model="form.uname"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
          </div>
          <ErrorMessage name="pass" class="error-feedback text-danger" />
          <div class="input-group mb-3">
            <Field
              name="pass"
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="form.pass"
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button
                type="submit"
                class="btn btn-primary btn-block"
                :disabled="loading"
              >
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span>
                Log In
              </button>
            </div>
          </div>
        </Form>
      </div>
      <div v-if="message" class="alert alert-danger" role="alert">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "Login",
  beforeMount() {
    $("body").removeClass("sidebar-mini").addClass("login-page");
    $("title").html(`Login | ${this.$store.state.app.name}`);
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      uname: yup.string().required("Username is required!"),
      pass: yup.string().required("Password is required!"),
    });
    return {
      form: {
        uname: "",
        pass: "",
      },
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true;

      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/dashboard");
          console.log('Berhasil');
        },
        (error) => {
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.msg) ||
            error.message ||
            error.toString();
        }
      );
    },
    // handleLogin(user) {
    //   axios
    //     .post("http://localhost:9027/api/v1/users/login", {
    //       uname: "admin",
    //       pass: "qa1234",
    //     })
    //     .then(function (response) {
    //       console.log(response.data.accessToken);
    //       TokenService.setUser(response.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // },
  },
};
</script>

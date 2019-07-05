import { AuthService } from './../../services/auth.service';
import { ModalsComponent } from './../modals/modal';

export class SignUpComponent {
    constructor() {
        this._authService = new AuthService();
        this._modal = new ModalsComponent();
    }
        render() {
            return `
            <div class="auth-wrap d-flex mt-5">
                <div class="auth-form col col-6 mx-auto my-auto">
                    <h3>Registration</h3>
                    <p class="text-secondary">Enter your data</p>
                    <form name="registrationForm" novalidate>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                            <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S">
                            <input type="nickname" class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname" required data-pattern="\S+">
                            <input type="first_name" class="form-control form-control-sm mt-3" id="first_name" placeholder="first name" required data-pattern="\S+">
                            <input type="last_name" class="form-control form-control-sm mt-3" id="last_name" placeholder="last name" required data-pattern="\S+">
                            <input type="phone" class="form-control form-control-sm mt-3" id="phone" placeholder="phone" required data-pattern="\d{10}">
                            <input type="gender_orientation" class="form-control form-control-sm mt-3" id="gender_orientation" placeholder="gender_orientation" required data-pattern="male|female">
                            <input type="city" class="form-control form-control-sm mt-3" id="city" placeholder="city" required data-pattern="\S+">
                            <input type="country" class="form-control form-control-sm mt-3" id="country" placeholder="country" required data-pattern="\S+">
                            <input type="date_of_birth_day" class="form-control form-control-sm mt-3" id="date_of_birth_day" placeholder="date_of_birth_day" required data-pattern="\d{1,2}">
                            <input type="date_of_birth_month" class="form-control form-control-sm mt-3" id="date_of_birth_month" placeholder="date_of_birth_month" required data-pattern="\d{1,2}">
                            <input type="date_of_birth_year" class="form-control form-control-sm mt-3" id="date_of_birth_year" placeholder="date_of_birth_year" required data-pattern="\d{4}">
                        <div class="d-flex mt-5">
                                <button type="submit" class="btn btn-primary btn-sm">Login</button>
                            </div>
                            <a href="#/">Go to Home page</a>
                            <a href="/#/login">Go to Login</a>
                        </div>
                    </form>
                </div>
                <!-- /.auth-form -->
                <div class="auth-bg col col-6">
    
                </div>
                <!-- /.auth-bg -->
            </div>
            <!-- /.auth-wrap -->
            `
        }

        afterRender() {
            document.forms.registrationForm.addEventListener('submit', e => {
                e.preventDefault();

                const data = {
                    email: document.forms.registrationForm.email.value,
                    password: document.forms.registrationForm.password.value,
                    nickname: document.forms.registrationForm.nickname.value,
                    first_name: document.forms.registrationForm.first_name.value,
                    last_name: document.forms.registrationForm.last_name.value,
                    phone: document.forms.registrationForm.phone.value,
                    gender_orientation: document.forms.registrationForm.gender_orientation.value, 
                    city: document.forms.registrationForm.city.value,
                    country: document.forms.registrationForm.country.value,
                    date_of_birth_day: document.forms.registrationForm.date_of_birth_day.value,
                    date_of_birth_month: document.forms.registrationForm.date_of_birth_month.value,
                    date_of_birth_year: document.forms.registrationForm.date_of_birth_year.value,
                };

            if (!data) {
                    return console.warn('Заполните все поля');
                }

            this._authService.signUp(data)
            .then(response => console.log(response))
            .catch(err => this._modal.render(err.message));
            });
        }
}
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  // Login Method
  login(email: string, password: string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( (res: any) =>{
      localStorage.setItem('token', 'true');

      if(res.user?.emailVerified == true){
        console.log('working')
        this.router.navigate(['/']);
      } else {
        console.log(JSON.stringify(res.user))
        console.log('please verify')
        this.router.navigate(['/verify-email']);
      }

    }, (err:any) => {
      alert(err.message);
      this.router.navigate(['/login']);
      console.log ("false")
    })
  }

  // Register Method
  register(email: string, password: string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then( (res: any) => {
      alert('Registration Successful');
      this.sendEmailForVarification(res.user);
      this.router.navigate(['/login']);
    }, (err:any) => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // Sign out
  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, (err:any) => {
      alert(err.message);
    })
  }

  // Forgot password
  forgotPassword(email : string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/verify-email ']);
    }, err => {
        alert('Something went wrong');
    })
  }

  // Email Varification
  sendEmailForVarification(user : any) {
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/verify-email']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  // Sign in with Google
  googleSignIn(){
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));
    }, err => {
      alert(err.message);
    })
  }
}

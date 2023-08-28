import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { SuccessComponent } from './pages/success/success.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './pages/cart/cart.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'log-in',component:LogInComponent},
  {path:'home',component:HomeComponent,  },
  {path:'menu',component:MenuComponent,  },
  {path:'menu/:id',component:MenupageComponent,  },
  {path:'about',component:AboutComponent,  },
  {path:'contact',component:ContactComponent,  },
  {path:'success',component:SuccessComponent,  },
  {path:'cart',component:CartComponent,  },
  {path:'payment',component:PaymentComponent,  },
  {path:'tracker',component:TrackerComponent,  }
  //canActivate:[AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes),HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {Component} from '@angular/core';
import {ProductType} from './types/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public advantages = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы\n' +
        '          получили 22.06.2016 г.'
    },
  ];

  public products:ProductType[] = [
    {
      image: 'item1.png',
      title: 'Макарун с малиной',
    },
    {
      image: 'item2.png',
      title: 'Макарун с манго',
    },
    {
      image: 'item3.png',
      title: 'Пирог с ванилью',
    },
    {
      image: 'item4.png',
      title: 'Пирог с фисташками',
    },
  ];

  public formValues = {
    productTitle: '',
    customerName: '',
    phone: '',
  }

  public showPresent:boolean = true;
  public phone:string = '+37529-999-99-99';
  public inst:string = 'https://instagram.com/';

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCard(product:ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }

  public showMenu(target:HTMLElement):void {
    target.classList.add('open');
  }

  public closeMenu(target:HTMLElement):void {
    target.classList.remove('open');
  }

  public createOrder(){
    if (!this.formValues.productTitle) {
      alert('Выберите macaroons');
      return;
    }
    if (!this.formValues.customerName) {
      alert('Введите ваше имя');
      return;
    }
    if (!this.phone) {
      alert('Введите номер телефона');
      return;
    }

    alert('Спасибо за заказ');

    this.formValues = {
      productTitle: '',
      customerName: '',
      phone: '',
    }
  }
}

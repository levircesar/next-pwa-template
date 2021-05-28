import React from 'react';
import { 
  FaInstagram , 
  FaFacebook ,
  FaAddressCard ,
  FaStore,
  FaMailchimp
} from 'react-icons/fa';

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaInstagram/>
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <FaInstagram/>
  },
  {
    title: 'Noticias',
    path: '/noticias',
    icon: <FaFacebook/>
  },
  {
    title: 'Store',
    path: '/store',
    icon: <FaStore/>
  },
  {
    title: 'Doar',
    path: 'https://www.paypal.com/donate?hosted_button_id=ZQR9J5LBZAMLN',
    icon: <FaAddressCard/>
  },
  {
    title: 'Site PWA',
    path: 'https://oque-eu-mando.vercel.app',
    icon: <FaAddressCard/>
  }
]
/*
{
    title: 'Admin',
    path: '/admin',
    icon: <FaAddressCard/>
  },
*/
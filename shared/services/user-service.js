import axios from 'axios';

 class UserService {

  getUser() {
    //  const userPromise = axios.get('https://jsonplaceholder.typicode.com/users')
   const userPromise = axios.get('https://demo1509725.mockable.io/product_details')
    // const userPromise = axios.get(' http://demo1402891.mockable.io/history ')
    .then(res => res.data)
    return userPromise;
    
  }

}

export default UserService
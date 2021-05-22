export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
        errors.username = 'Kërkohet Emri';
      }
    // else if (!/^[A-Za-z]+/.test(values.username.trim())) {
    //   errors.name = 'Shkruaje Emrin real';
    // }
    
     if (!values.surname.trim()) {
        errors.surname = 'Kërkohet Mbiemri';
      }
     /*else if (!/^[A-Za-z]+/.test(values.surname.trim())) {
       errors.surname = 'Shkruaje Mbiemrin real';
     }*/
  
    if (!values.email) {
      errors.email = 'Kërkohet Email';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Adresa e emailit është e pavlefshme';
    }
    if (!values.password) {
      errors.password = 'Kërkohet fjalëkalimi';
    } else if (values.password.length < 8) {
      errors.password = 'Fjalëkalimi duhet të ketë 8 karaktere ose më shumë';
    }
  
    if (!values.password2) {
      errors.password2 = 'Kërkohet fjalëkalimi';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Fjalëkalimet nuk përputhen';
    }
    return errors;
  }


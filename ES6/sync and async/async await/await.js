const getNumber = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(42); 
      }, 2000);
    });
  };
  
  const getValue = async () => {
    const result = await getNumber();
   document.write(result); 
  };
  

  getValue();
  
import toast from "react-hot-toast";

const getToCard = () => {
  const card = localStorage.getItem('card');
  if (card) {
    const fav = JSON.parse(card);
    console.log('Fetched Card:', fav);
    return fav;
  } else {
    console.log('Card is empty:', []);
    return [];
  }
};

const addToCard = product => {
  const card = getToCard();
  const isExist = card.find(item => item.product_id == product.product_id);
  if (isExist) {
    toast.error("Soory already Exist !")
    return;
  }
  card.push(product);
  localStorage.setItem('card', JSON.stringify(card));
  toast.success('Successfully Added!')
};

const removeCard = (id) => {
  const card = getToCard();
  const remaining = card.filter(product => product.product_id != id.product_id);
  localStorage.setItem('card', JSON.stringify(remaining));
  toast.success('Successfully Remove !')
}

export { getToCard, addToCard, removeCard };

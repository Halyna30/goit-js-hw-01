const total = 100;
const ordered = 80;

const checked =
  total >= ordered
    ? `Замовлення оформлено, з вами зв'яжеться менеджер`
    : `На складі недостатньо товарів`;

console.log(checked);

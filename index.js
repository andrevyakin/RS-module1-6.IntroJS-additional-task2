const clientName = prompt("Введите имя клиента").trim();
let clientSpentToday = Number(prompt("Сколько клиент потратил сегодня?").trim());
let clientSpentForAllTime = Number(prompt("Сколько клиент потратил за все время?").trim());

if (isNaN(clientSpentForAllTime) || isNaN(clientSpentToday))
    alert("Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.")
else {
    let discount = 1;
    //Решил предоставлять скидку с первой покупке, даже при нулевом балансе, а то не справедливо.
    //Пришел первый раз. Оплатил банкет на 1000. И все без скидки.
    const discountAmount = clientSpentToday > clientSpentForAllTime ? clientSpentToday : clientSpentForAllTime;
    if (discountAmount > 100 && discountAmount <= 300)
        discount = 0.9;
    if (discountAmount > 300 && discountAmount <= 500)
        discount = 0.8;
    if (discountAmount > 500)
        discount = 0.7;

    alert(`Вам предоставляется скидка в ${((1 - discount) * 100).toFixed()}%!`);

    clientSpentToday *= discount;
    clientSpentForAllTime += clientSpentToday;

    alert(`Спасибо, ${clientName}!
К оплате ${clientSpentToday.toFixed(2)}$.
За все время в нашем ресторане вы потратили ${clientSpentForAllTime.toFixed(2)}$.`);
}
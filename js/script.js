// Copyright (c) 2022 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-6-03-JS/sw.js", {
    scope: "/ICS20-6-03-JS/",
  })
}

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    const card = jsonData.card_images[0]
    const image = card.image_url

    console.log(jsonData)
    console.log(jsonData.card_images)
    document.getElementById("api-card").innerHTML =
      "<img src="+
      image +
      " alt='random yugioh card' width='10%'><br><h5>"
    ;(">")

    document.getElementById("api-weather").innerHTML =
      "<p>temperature in ottawa is </p>" + c.toFixed(2)
  } catch (err) {
    console.log(err)
  }
}

getImage(
  "https://db.ygoprodeck.com/api/v7/randomcard.php"
)

// Copyright (c) 2022 Ali Mugamai All rights reserved
//
// Created by: Ali Mugamai
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-A6-JS/sw.js", {
    scope: "/ICS20-A6-JS/",
  })
}

const getImage = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    const card_image = jsonData.card_images[0]
    const image = card_image.image_url
    const card_desc = jsonData.desc

    console.log(jsonData)
    console.log(jsonData.card_images)
    document.getElementById("api-card").innerHTML =
      "<img src="+
      image +
      " alt='random yugioh card' width='25%' height='50%'><br><h5>"
    ;(">")
    console.log(jsonData.desc)
    document.getElementById("api-card_effect").innerHTML = card_desc
  } catch (err) {
    console.log(err)
  }
}

getImage(
  "https://db.ygoprodeck.com/api/v7/randomcard.php"
)

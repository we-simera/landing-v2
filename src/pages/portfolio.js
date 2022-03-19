import React from "react"
import Layout from "../components/Layout"
import { ImageList, ImageListItem } from "@mui/material"

export default function Home() {
  return (
    <Layout>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map(item => {
          let Img = require(`../assets/images/commercial/${item.img}`).default
          return (
            <ImageListItem key={item.img}>
              <img
                src={`${Img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          )
        })}
      </ImageList>
    </Layout>
  )
}

const itemData = [
  {
    img: "comm1.jpg",
    title: "com1",
  },
  { img: "track.jpg", title: "track" },
  { img: "astro1.jpg", title: "astro" },
  { img: "comm3.jpg", title: "comm3" },
  { img: "comm4.jpg", title: "comm4" },
  { img: "comm5.jpg", title: "comm5" },
  { img: "logos1.jpg", title: "logos1" },
  { img: "logos2.jpg", title: "logos2" },
  { img: "logos3.jpg", title: "logos3" },
  { img: "logos5.jpg", title: "logos5" },
  { img: "Dance Port.jpg", title: "danceport" },
  { img: "dogastro.jpg", title: "dog" },
  { img: "gear.jpg", title: "gear" },
  { img: "Panther Port.jpg", title: "panther" },
  { img: "Ironman Lan.jpg", title: "ironman" },
  { img: "dog cute.jpg", title: "dog" },
  { img: "ha1.png", title: "h1" },
  { img: "ha2.jpg", title: "h2" },
  { img: "sp.jpg", title: "sp" },
  { img: "table waters.jpg", title: "tablewaters" },
  { img: "grg.jpg", title: "grg" },
  { img: "road.jpg", title: "road" },
  { img: "sleeping.jpg", title: "sleeping" },
  { img: "Thorberty Port.jpg", title: "Port" },
  { img: "triangle.jpg", title: "triangle" },
  { img: "Touch the Moon Lan.jpg", title: "moon" },
  { img: "manipulate.jpg", title: "moon" },
  { img: "ha3.jpg", title: "ha3" },
]

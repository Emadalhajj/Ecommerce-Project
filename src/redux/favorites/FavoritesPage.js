import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../cart/cartSlice";
import Swal from "sweetalert2";
import { addToFavorite } from "./favoritesSlice";


export default function FavoritesPage() {
   
  return (
    <Container className="my-4">
    
    </Container>
  );
}

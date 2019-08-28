import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'
import { addItem } from '../../redux/cart/cart.actions'


const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    &:hover {
        .collection-image {
          opacity: 0.8
        }
        button {
          opacity: 0.85;
          display: flex;
        }
      }

      @media screen and (max-width: 800px) {
          width: 40vw;

          &:hover {
            .collection-image {
              opacity: unset
            }
            button {
              opacity: unset;
             
            }
          }
      }`

const ItemImage = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`

const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;`

const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;`

const Price = styled.span`
    width: 10%;`

const CollectionButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
    
    @media screen and (max-width: 800px) {
     display: block;
     opacity: 0.9;
     min-width: unset; 
     padding: 0 10px;  
    }`

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item
    return (
    <CollectionItemContainer>
        <ItemImage className="collection-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        ></ItemImage>
            <CollectionFooter>
                <Name>{name}</Name>
                <Price className="price">£{price}</Price>
            </CollectionFooter>
            <CollectionButton onClick={() => addItem(item)} inverted> Add To Cart </CollectionButton>
    </CollectionItemContainer>
    
    )}

    const mapDispatchToProps = dispatch => ({
        addItem: item => dispatch(addItem(item))
    })

export default connect(null, mapDispatchToProps)(CollectionItem)
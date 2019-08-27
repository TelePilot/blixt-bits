import React from 'react'
import styled from 'styled-components'
import { connect } from "react-redux"

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from "../../redux/shop/shop.selectors"

const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;`

const Title = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;`

const Items = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    &.collection-item {
        margin-bottom: 30px;
      }
`

const CollectionPage = ({ collection }) => {
    const { title, items } = collection
    return(
    <CollectionPageContainer>
        <Title>{title}</Title>
        <Items>
            {items.map(item => <CollectionItem key={item.id} item={item} /> )}
        </Items>

    </CollectionPageContainer>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
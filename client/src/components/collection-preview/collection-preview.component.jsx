import React from 'react'
import styled from 'styled-components'

import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`
const Title = styled.h1`
    font-size: 28px;
    margin-bottom: 25px`

const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }`


const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <Title>{title.toUpperCase()}</Title>
        <PreviewContainer>
           { items
           .filter((item, idx) => idx < 4)
           .map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview
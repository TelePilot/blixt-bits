import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import styled from 'styled-components'

import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionsOverviewContainer = styled.div`
    display: flex;
    flex-flow: column;`

const CollectionsOverview = ({ collections }) => (
    <CollectionsOverviewContainer>
         {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </CollectionsOverviewContainer>
)


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
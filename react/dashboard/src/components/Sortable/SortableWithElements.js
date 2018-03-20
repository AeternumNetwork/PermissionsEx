import React, { Component } from 'react';

import {
    SortableContainer,
    SortableElement,
    SortableHandle,
    arrayMove,
} from 'react-sortable-hoc';

import {
    ListGroup,
    ListGroupItem,
    Media
} from 'reactstrap'

import Icon from '../Icon'

const DragHandle = SortableHandle(() => <Icon i='fa fa-bars' />); // This can be any component you want

const SortableItem = SortableElement(({ value }) => {
    return (
        <Media >
            <Media body>
                <ListGroupItem color={value.color ? value.color : undefined}>
                    <DragHandle />{' '}
                    {value.value}
                </ListGroupItem>
            </Media>
            <Media>{value.after}</Media>
        </Media>
    );
});

const SortableList = SortableContainer(({ items }) => {
    return (
        <ListGroup>
            {items.map((item, index) => (
                <SortableItem key={`item-${index}`} index={index} value={item} />
            ))}
        </ListGroup>
    );
});

class SortableComponent extends Component {
    render() {
        const items = this.props.items;

        return <SortableList helperClass='sortableHelper' items={items} onSortEnd={this.props.onSortEnd} useDragHandle={true} />;
    }
}

export default SortableComponent
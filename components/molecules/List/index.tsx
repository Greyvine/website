
import React from "react"
import styled from "@emotion/styled"

type Props = {
    items: string[]
}

const ListItem = styled.li`
    list-style-type: disc;    
`

const List: React.FC<Props> = ({ items }) => <ul>
    {items.map((x, i) => <ListItem key={i}>{x}</ListItem>)}
</ul>

export default List



function ListItem({ RiverList }) {
    
    return (
        <ul>
            {
             RiverList.map((River) =>(<li>{River}</li>))
            }
        </ul>
    );
  }


export default ListItem
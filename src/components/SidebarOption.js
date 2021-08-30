import styled from "styled-components"

function SidebarOption({ Icon, title }) {
const AddChannel = () => {

}
 
    return (
        <SidebarOptionContainer onClick={ addChannelOption ? AddChannel : SelectChannel } >
            {Icon && <Icon fontSize="small" style={{padding: 10}} />}
            {Icon ? (
                <h3>{title}</h3>
            ): (
                <SidebarOptionChanel>
                    <span>#</span> {title}
                </SidebarOptionChanel>
            )}
        </SidebarOptionContainer>
    )
}

export default SidebarOption

const SidebarOptionContainer = styled.div`
    display: flex;
    font-size: 12px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;
    }

    > h3 > span {
        padding: 15px;
    }
`;

const SidebarOptionChanel = styled.div``;


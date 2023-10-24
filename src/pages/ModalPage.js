import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>

      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est
        sapien, rutrum eget mollis eget, semper accumsan velit. Proin non justo
        sit amet ligula tempor vestibulum. Curabitur efficitur feugiat magna vel
        luctus. Nam maximus augue lectus, non mollis velit laoreet sit amet.
        Vestibulum at finibus magna. Praesent venenatis faucibus accumsan.
        Mauris ac convallis metus. Morbi rutrum neque et est tempus tempor.
        Mauris egestas ipsum a mauris sodales, vulputate bibendum tellus
        efficitur. Nullam arcu odio, sollicitudin sit amet sapien in, vestibulum
        ultrices dolor. Nunc rhoncus erat eros, id pharetra purus elementum non.
        Aenean ultrices nulla tortor, in tempus magna facilisis id. Duis dui
        nibh, pellentesque placerat arcu vitae, bibendum interdum turpis. Proin
        consequat volutpat diam, in placerat risus volutpat vitae. Praesent in
        venenatis tellus. Nullam ut interdum dolor, vitae faucibus metus.
        Suspendisse faucibus ultricies sem, sit amet consectetur ipsum
        scelerisque tempus. Aliquam cursus, nunc in sagittis ornare, mi justo
        eleifend nunc, ullamcorper tincidunt leo elit non justo. Nulla blandit
        luctus sapien. Aenean sit amet nulla et tellus malesuada blandit.
        Vestibulum ut faucibus felis. Phasellus a tellus lacinia, lobortis orci
        id, semper felis. Cras at mauris et eros elementum posuere. Cras iaculis
        in nulla vitae porttitor. Vestibulum ac ligula suscipit est varius
        consectetur. Duis neque est, lobortis id quam non, imperdiet iaculis
        dui. Integer ac fermentum sapien. Phasellus feugiat mollis gravida.
        Phasellus sed urna condimentum, consectetur mi eu, tempus quam. Fusce et
        ante vitae enim fringilla efficitur a eu lectus. Duis ac mi orci. Aenean
        tempor dolor vel nisl maximus blandit. Sed dapibus urna est, eu
        vulputate felis suscipit in. Sed sit amet egestas tellus. Mauris a mi id
        lacus luctus egestas. Quisque suscipit feugiat augue, in hendrerit
        neque. In suscipit consequat ipsum, sed tincidunt magna maximus at. Cras
        ac ornare tellus. Aliquam ultrices luctus ligula non egestas. Etiam non
        tincidunt orci, sed tincidunt metus. Aliquam tincidunt sodales
        fermentum. Nulla aliquet quam arcu, ac bibendum massa semper in. In
        tincidunt facilisis purus, eget tincidunt lacus rutrum vel. Mauris
        facilisis vehicula facilisis. Vivamus ultricies et sapien a lacinia.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nunc volutpat nec nisl eget faucibus. Cras ut
        nisl placerat, mattis justo vel, tincidunt ex. Praesent tempus, quam nec
        tristique mattis, magna justo finibus tortor, id dignissim leo est ac
        eros. In eros sapien, elementum ut sagittis eget, mattis quis ligula.
        Etiam tristique et sapien sit amet hendrerit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est
        sapien, rutrum eget mollis eget, semper accumsan velit. Proin non justo
        sit amet ligula tempor vestibulum. Curabitur efficitur feugiat magna vel
        luctus. Nam maximus augue lectus, non mollis velit laoreet sit amet.
        Vestibulum at finibus magna. Praesent venenatis faucibus accumsan.
        Mauris ac convallis metus. Morbi rutrum neque et est tempus tempor.
        Mauris egestas ipsum a mauris sodales, vulputate bibendum tellus
        efficitur. Nullam arcu odio, sollicitudin sit amet sapien in, vestibulum
        ultrices dolor. Nunc rhoncus erat eros, id pharetra purus elementum non.
        Aenean ultrices nulla tortor, in tempus magna facilisis id. Duis dui
        nibh, pellentesque placerat arcu vitae, bibendum interdum turpis. Proin
        consequat volutpat diam, in placerat risus volutpat vitae. Praesent in
        venenatis tellus. Nullam ut interdum dolor, vitae faucibus metus.
        Suspendisse faucibus ultricies sem, sit amet consectetur ipsum
        scelerisque tempus. Aliquam cursus, nunc in sagittis ornare, mi justo
        eleifend nunc, ullamcorper tincidunt leo elit non justo. Nulla blandit
        luctus sapien. Aenean sit amet nulla et tellus malesuada blandit.
        Vestibulum ut faucibus felis. Phasellus a tellus lacinia, lobortis orci
        id, semper felis. Cras at mauris et eros elementum posuere. Cras iaculis
        in nulla vitae porttitor. Vestibulum ac ligula suscipit est varius
        consectetur. Duis neque est, lobortis id quam non, imperdiet iaculis
        dui. Integer ac fermentum sapien. Phasellus feugiat mollis gravida.
        Phasellus sed urna condimentum, consectetur mi eu, tempus quam. Fusce et
        ante vitae enim fringilla efficitur a eu lectus. Duis ac mi orci. Aenean
        tempor dolor vel nisl maximus blandit. Sed dapibus urna est, eu
        vulputate felis suscipit in. Sed sit amet egestas tellus. Mauris a mi id
        lacus luctus egestas. Quisque suscipit feugiat augue, in hendrerit
        neque. In suscipit consequat ipsum, sed tincidunt magna maximus at. Cras
        ac ornare tellus. Aliquam ultrices luctus ligula non egestas. Etiam non
        tincidunt orci, sed tincidunt metus. Aliquam tincidunt sodales
        fermentum. Nulla aliquet quam arcu, ac bibendum massa semper in. In
        tincidunt facilisis purus, eget tincidunt lacus rutrum vel. Mauris
        facilisis vehicula facilisis. Vivamus ultricies et sapien a lacinia.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nunc volutpat nec nisl eget faucibus. Cras ut
        nisl placerat, mattis justo vel, tincidunt ex. Praesent tempus, quam nec
        tristique mattis, magna justo finibus tortor, id dignissim leo est ac
        eros. In eros sapien, elementum ut sagittis eget, mattis quis ligula.
        Etiam tristique et sapien sit amet hendrerit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin est
        sapien, rutrum eget mollis eget, semper accumsan velit. Proin non justo
        sit amet ligula tempor vestibulum. Curabitur efficitur feugiat magna vel
        luctus. Nam maximus augue lectus, non mollis velit laoreet sit amet.
        Vestibulum at finibus magna. Praesent venenatis faucibus accumsan.
        Mauris ac convallis metus. Morbi rutrum neque et est tempus tempor.
        Mauris egestas ipsum a mauris sodales, vulputate bibendum tellus
        efficitur. Nullam arcu odio, sollicitudin sit amet sapien in, vestibulum
        ultrices dolor. Nunc rhoncus erat eros, id pharetra purus elementum non.
        Aenean ultrices nulla tortor, in tempus magna facilisis id. Duis dui
        nibh, pellentesque placerat arcu vitae, bibendum interdum turpis. Proin
        consequat volutpat diam, in placerat risus volutpat vitae. Praesent in
        venenatis tellus. Nullam ut interdum dolor, vitae faucibus metus.
        Suspendisse faucibus ultricies sem, sit amet consectetur ipsum
        scelerisque tempus. Aliquam cursus, nunc in sagittis ornare, mi justo
        eleifend nunc, ullamcorper tincidunt leo elit non justo. Nulla blandit
        luctus sapien. Aenean sit amet nulla et tellus malesuada blandit.
        Vestibulum ut faucibus felis. Phasellus a tellus lacinia, lobortis orci
        id, semper felis. Cras at mauris et eros elementum posuere. Cras iaculis
        in nulla vitae porttitor. Vestibulum ac ligula suscipit est varius
        consectetur. Duis neque est, lobortis id quam non, imperdiet iaculis
        dui. Integer ac fermentum sapien. Phasellus feugiat mollis gravida.
        Phasellus sed urna condimentum, consectetur mi eu, tempus quam. Fusce et
        ante vitae enim fringilla efficitur a eu lectus. Duis ac mi orci. Aenean
        tempor dolor vel nisl maximus blandit. Sed dapibus urna est, eu
        vulputate felis suscipit in. Sed sit amet egestas tellus. Mauris a mi id
        lacus luctus egestas. Quisque suscipit feugiat augue, in hendrerit
        neque. In suscipit consequat ipsum, sed tincidunt magna maximus at. Cras
        ac ornare tellus. Aliquam ultrices luctus ligula non egestas. Etiam non
        tincidunt orci, sed tincidunt metus. Aliquam tincidunt sodales
        fermentum. Nulla aliquet quam arcu, ac bibendum massa semper in. In
        tincidunt facilisis purus, eget tincidunt lacus rutrum vel. Mauris
        facilisis vehicula facilisis. Vivamus ultricies et sapien a lacinia.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nunc volutpat nec nisl eget faucibus. Cras ut
        nisl placerat, mattis justo vel, tincidunt ex. Praesent tempus, quam nec
        tristique mattis, magna justo finibus tortor, id dignissim leo est ac
        eros. In eros sapien, elementum ut sagittis eget, mattis quis ligula.
        Etiam tristique et sapien sit amet hendrerit.
      </p>
    </div>
  );
}

export default ModalPage;

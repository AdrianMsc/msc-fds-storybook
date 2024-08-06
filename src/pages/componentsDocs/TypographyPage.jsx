import { Codeblock } from "../../components";

const TypographyPage = () => {
  return (
    <>
      <small className="category-tag">Foundations</small>
      <h1>Typography</h1>

      <p className="mt-3">
        In this section you can see the heading variants, the styles are applied
        directly to the tag for the common use on each app as the default style
        for the headings.
      </p>

      <h2 class="font-bold text-2xl my-3">Headings</h2>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <Codeblock>
        {`
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
        `}
      </Codeblock>

      <h2 class="font-bold text-2xl my-3">Body</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        nam eaque facilis eos voluptatum aperiam accusantium, expedita qui
        perferendis earum mollitia alias. Iste laborum cupiditate nemo suscipit
        libero hic nihil!
      </p>

      <h2 class="font-bold text-2xl my-3">Overline</h2>

      <p>
        This is an <span class="overline-text">Overline</span>
      </p>

      <h2 class="font-bold text-2xl my-3">Caption</h2>

      <p>
        This is a <span class="caption-text">Caption</span>
      </p>

      <h2 class="font-bold text-2xl my-3">Helper Text</h2>

      <p>
        This is a <span class="helper-text">Helper Text</span>
      </p>

      <h2 class="font-bold text-2xl my-3">Custom</h2>

      <p>
        This is a <span class="custom-text">Custom Text</span>: This text has a
        Roboto Font applied, it will depend of the previous installation of the
        font**
      </p>

      <Codeblock>
        {`
  <!-- BODY -->
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Perspiciatis, nam eaque facilis eos voluptatum aperiam accusantium,
    expedita qui perferendis earum mollitia alias. Iste laborum
    cupiditate nemo suscipit libero hic nihil!
  </p>

  <!-- OVERLINE -->
  <h2 class="font-bold text-2xl my-3">Overline</h2>

  <!-- CAPTION -->
  <h2 class="font-bold text-2xl my-3">Caption</h2>

  <!-- HELPER -->
  <h2 class="font-bold text-2xl my-3">Helper Text</h2>

  <!-- CUSTOM -->
  <h2 class="font-bold text-2xl my-3">Custom</h2>

  <p>
    This is a <span class="custom-text">Custom Text</span>: This text
    has a Roboto Font applied, it will depend of the previous
    installation of the font**
  </p>
        `}
      </Codeblock>
    </>
  );
};

export default TypographyPage;

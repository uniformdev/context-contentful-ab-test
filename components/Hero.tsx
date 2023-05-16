import { IHeroFields } from "@/@types/generated/contentful"

export const Hero = ({
  title,
  text,
  buttonLink,
  buttonText
}: IHeroFields) => {
  return (
    <div className="container-fluid bg-dark text-light p-5 mt-5">
      <div className="container bg-dark p-5">
        <h1 className="display-4">{title}</h1>
        <hr />
        <p>{text}</p>
        <a
          href={buttonLink}
          className="btn btn-primary"
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
}
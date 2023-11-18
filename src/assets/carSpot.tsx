
type Props = {
    color: string;
}

const CarSpotImg = ({color}: Props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={133.333}
      height={133.333}
      viewBox="0 0 100 100"
     fill={color || 'currentColor'}
    >
      <path d="M31.5 15.1c-4.4.6-7.6 1.6-8.8 2.7-1 1-3.1 5.2-4.7 9.3-1.9 4.8-3.4 7.2-4.2 7-.7-.3-3.4-.7-6.1-.9-4.5-.4-4.7-.3-4.7 2.2C3 38.5 6.2 42 9.1 42c2 0 2.1.1.5 2.5-1.4 2.1-1.6 5.3-1.4 21.7l.3 19.3 4.8.3c5.8.4 7.3-.6 8.1-5.7l.6-3.9h56l.6 3.9c.8 5.1 2.3 6.1 8.1 5.7l4.8-.3.3-19.3c.2-16.4 0-19.6-1.4-21.7-1.6-2.4-1.5-2.5.5-2.5 2.9 0 6.1-3.5 6.1-6.6 0-2.5-.2-2.6-4.7-2.2-2.7.2-5.4.6-6.1.9-.8.2-2.3-2.2-4.2-7-1.6-4.1-3.7-8.3-4.7-9.2-3.4-3.4-28.8-4.9-45.8-2.8zm39 6.7c2.7.8 3.4 1.9 6.7 10.3l3.7 9.4-4.7.8c-6.2 1.1-46.4 1.1-52.4.1l-4.7-.9 3.5-9c1.9-5 3.9-9.4 4.3-9.8 2.4-2.4 35.6-3 43.6-.9zM30.8 51.5c.2.2-.4 1.7-1.3 3.4-1.3 2.7-2.1 3.1-5.6 3.1-5.2 0-7.4-1.3-8.7-5l-1.1-3 8.2.6c4.5.4 8.3.8 8.5.9zm54 1.5c-1.3 3.7-3.5 5-8.7 5-3.5 0-4.3-.4-5.6-3-.8-1.6-1.5-3.1-1.5-3.4 0-.3 2.8-.7 6.3-.9 3.4-.2 7.2-.4 8.4-.5 2-.2 2.1 0 1.1 2.8zM65 63.9c0 .5-.4 2.1-1 3.5L63 70H50.1C38.2 70 37 69.8 36 68.1c-2.6-4.9-2.1-5.1 14-5.1 8.6 0 15 .4 15 .9z" />
    </svg>
  )
  export default CarSpotImg
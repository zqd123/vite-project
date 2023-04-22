export interface Image {
  url: string;
  isPerfTest?: boolean;
  selectedColor?: string;
  isTrue?: boolean;
  children?: Image[];
}
const baseUrl = "src/assets/first-test/";
export const testImages: Image[] = [
  {
    url: baseUrl + "t1.0",
    children: [
      {
        url: baseUrl + "t1.1",
      },
      {
        url: baseUrl + "t1.2",
      },
      {
        url: baseUrl + "t1.3",
      },
      {
        url: baseUrl + "t1.4",
        isTrue: true,
      },
      {
        url: baseUrl + "t1.5",
      },
      {
        url: baseUrl + "t1.6",
      },
    ],
  },
  {
    url: baseUrl + "t2.0",
    children: [
      {
        url: baseUrl + "t2.1",
      },
      {
        url: baseUrl + "t2.2",
      },
      {
        url: baseUrl + "t2.3",
        isTrue: true,
      },
      {
        url: baseUrl + "t2.4",
      },
      {
        url: baseUrl + "t2.5",
      },
      {
        url: baseUrl + "t2.6",
      },
    ],
  },
];
const Images: Image[] = [
  {
    url: baseUrl + "t1.1",
  },
  {
    url: baseUrl + "t1.2",
  },
  {
    url: baseUrl + "t1.3",
  },
  {
    url: baseUrl + "t1.1",
  },
  {
    url: baseUrl + "t1.1",
  },
  {
    url: baseUrl + "t1.1",
  },
  {
    url: baseUrl + "t1.1",
  },
];

export default Images;

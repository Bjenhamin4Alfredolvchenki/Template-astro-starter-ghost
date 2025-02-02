export const getGhostImgPath = (
  baseUrl: string,
  imgUrl: string,
  width: number = 0
): string => {
  if (!imgUrl.startsWith(baseUrl)) {
    return imgUrl;
  }
  const relativePath = imgUrl.substring(`${baseUrl}/content/images`.length);
  const cleanedBaseUrl = baseUrl.replace(/\/$/, "");
  if (width && width > 0) {
    return `${cleanedBaseUrl}/content/images/size/w${width}/${relativePath}`;
  }
  return `${cleanedBaseUrl}/content/images/${width}${relativePath}`;
};

export const truncate = (input: string, size: number): string =>
  input.length > size ? `${input.substring(0, size)}...` : input;

export const formatDate = (dateInput: string): string => {
  let dateObject = new Date(dateInput);
  return dateObject.toDateString();
};

export const uniqWith = (arr: Array<any>, fn: Function): Array<any> =>
  arr.filter(
    (element, index) => arr.findIndex((step) => fn(element, step)) === index
  );

export const initialValuesFromMetadata = (metadata: any[]) => {
  const initialValues: { [name: string]: any } = {};

  metadata.forEach((config) => {
    initialValues[config.name] = config.default;
  });

  return initialValues;
};

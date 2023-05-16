import { ITestFields, ITestVariantFields } from "@/@types/generated/contentful";
import { Test as UniformTest, useScores, useUniformContext } from '@uniformdev/context-react';
import { PersonalizedVariant, TestVariant, VariantMatchCriteria } from "@uniformdev/context";
import { resolveComponent } from "./resolve";
import { useMemo } from "react";

type ContentfulTestVariant = TestVariant & {
  type: string;
  fields: Record<string, any>;
}

export const Test = ({
  name,
  uniformTest,
  variants,
  unfrmOptPersonalizationCriteria
}: ITestFields) => {
  const {
    context
  } = useUniformContext();

  const scores = useScores();

  const testVariants = variants?.map(data => {
    const fields = data.fields as ITestVariantFields;

    const variant: ContentfulTestVariant = {
      id: fields.component!.sys.id!,
      testDistribution: fields.distribution,
      type: fields.component!.sys.contentType.sys.id,
      fields: fields.component!.fields
    }

    return variant;
  });

  const isVisible = useMemo(() => {
    // tests can have personalization criteria associated with them
    // and we only want to show them if the criteria is met.
    const variations: PersonalizedVariant[] = [{
      id: uniformTest,
      pz: unfrmOptPersonalizationCriteria as VariantMatchCriteria | undefined
    }];

    const result = context.personalize({
      name,
      variations
    });

    // if we get a variant back, then we should show the test because
    // it's either a personalization match or default.
    const showTest = result.variations.length > 0;

    return showTest;
  }, [context, scores, unfrmOptPersonalizationCriteria]);

  if (!isVisible) {
    return <></>;
  }

  return (
    <UniformTest<ContentfulTestVariant>
      name={uniformTest}
      component={(variant) => {
        const VariantComponent = resolveComponent(variant.type);

        if (!VariantComponent) {
          return null;
        }

        const variantFields = variant.fields || {};

        return (
          <VariantComponent
            {...variantFields}
          />
        )
      }}
      variations={testVariants}
    />
  )
}
import { type } from "os";
import { number, object, string, TypeOf } from "zod";

const payload = {
  body: object({
    name: string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    })
      .min(5, "name must be 5 or more character long")
      .max(10, "name must be less character long then 10"),
    amount: number({
      required_error: "number is required",
      invalid_type_error: "amount must be a number",
    }).min(0, "number must be positive"),
  }),
};

const params = {
  params: object({
    exampleId: string({
      required_error: "exampleId is required",
    }),
  }),
};

export const createExampleSchema = object({
  ...payload,
});
export const updateExampleSchema = object({
  ...payload,
  ...params,
});

export const deleteExampleSchema = object({
  ...params,
});
export const getExampleSchema = object({
  ...params,
});

export type CreateExampleInput = TypeOf<typeof createExampleSchema>;
export type UpdateExampleInput = TypeOf<typeof updateExampleSchema>;
export type DeleteExampleInput = TypeOf<typeof deleteExampleSchema>;
export type GetExampleInput = TypeOf<typeof getExampleSchema>;

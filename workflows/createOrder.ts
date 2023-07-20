import { delay } from "https://deno.land/std@0.160.0/async/delay.ts";
import { WorkflowContext } from "https://raw.githubusercontent.com/mcandeia/deno-workflows/main/context.ts";

interface OrderForm {
  items: string[];
}
interface Order extends OrderForm {
  id: string;
}
async function createOrderVtex(
  vtexAccount: string,
  form: OrderForm,
): Promise<void> {
  console.log("Received orderForm", vtexAccount, form);
  await delay(5000); // faking some delay
}

export interface Props {
  vtexAccountName: string;
}

const createOrder = function* createOrder(
  ctx: WorkflowContext,
  { vtexAccountName }: Props,
  orderForm: OrderForm,
) {
  yield ctx.callActivity(createOrderVtex, vtexAccountName, orderForm);
  const orderCreated: Order = yield ctx.waitForSignal("order_created");
  return { id: orderCreated.id };
};

export default createOrder;

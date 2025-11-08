import { RegularDiscount } from "./classes/RegularDiscount";
import { StudentDiscount } from "./classes/StudentDiscount";
import { VipDiscount } from "./classes/VipDiscount";
import { DiscountContext } from "./classes/DiscountContext";

export const ocpExample = () => {
    const regular = new DiscountContext(new RegularDiscount())
    regular.applyDiscount()

    const student = new DiscountContext(new StudentDiscount())
    student.applyDiscount()

    const vip = new DiscountContext(new VipDiscount())
    vip.applyDiscount()
};

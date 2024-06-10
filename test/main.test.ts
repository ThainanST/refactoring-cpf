import { validate } from "../src/main";

test("Deve testar cpf válido", function () {
    const cpf = "987.654.321-00";
    const isValid = validate(cpf);
    expect(isValid).toBe(true);
});
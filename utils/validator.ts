export default function validator(values: { email: string; password: string }) {
    let errors: Record<string, string> = {};

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const valid = regex.test(values.email);

    if (!valid) {
        errors.email = "gecerli email giriniz";
    }

    if (values.password.trim().length < 2) {
        errors.password = "sifre 3 karakterden fazla olmali";
    }

    return errors;
}

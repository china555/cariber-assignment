import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useForm, FieldError } from "react-hook-form";
import { Input } from "../components/Input";
import { useRef } from "react";
import axios from "axios";
type Form = {
  name: string;
  surname: string;
  email: string;
  tel: number;
  creditCard: number;
  expired: number;
  CVC: number;
};

const Home: NextPage = () => {
  const couponref = useRef<any>("");
  const errorMessages = (fieldName: string, errors: FieldError) => {
    const errorRequire = errors?.type === "required" ? "* required" : "";
    if (
      fieldName === "name" ||
      fieldName === "surname" ||
      fieldName === "email" ||
      fieldName === "tel" ||
      fieldName === "creditCard" ||
      fieldName === "expired" ||
      fieldName === "CVC"
    )
      return [errorRequire];
  };
  const onSubmit = async (dataForm: Form) => {
    console.log(couponref.current.value);
    const data = { ...dataForm, coupon: couponref.current.value };
    axios.post("http://localhost:3030/form", data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();
  return (
    <div className="site-content">
      <div className="col-full">
        <div className="entry-header">
          <h1 className="text-center m-0">Cariber สั่งซื้อและชำระเงิน</h1>
        </div>
        <form>
          <p>กรุณาระบุโค้ดส่วนลด </p>
          <div className="d-flex">
            <p className="form-row-first">
              <input
                ref={couponref}
                type="text"
                className="input-text w-full"
                placeholder="รหัสคูปอง"
                id="coupon_code"
              />
            </p>
            <p className="form-row form-row-last">
              <button
                type="submit"
                className="button checkout_coupon"
                name="apply_coupon"
                value="ใช้คูปอง"
              >
                ใช้คูปอง
              </button>
            </p>
          </div>
        </form>

        <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-50">
            <h3 className="fs-md">ข้อมูลผู้ซื้อ</h3>
            <div className="d-flex">
              <div className="mr-2 mb-3">
                <div>
                  ชื่อจริง
                  <abbr className="required" title="ต้องการ">
                    *
                  </abbr>
                </div>
                <Input
                  {...register("name", { required: true })}
                  isRequired={true}
                  isInvalid={errors.name?.type === "required"}
                  errorMessages={errorMessages(
                    "name",
                    errors.name as FieldError
                  )}
                  placeholder="ภาษาไทย หรือ ภาษาอังกฤษ"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <div>
                  นามสกุล
                  <abbr className="required" title="ต้องการ">
                    *
                  </abbr>
                </div>
                <Input
                  {...register("surname", { required: true })}
                  isInvalid={errors.name?.type === "required"}
                  errorMessages={errorMessages(
                    "surname",
                    errors.name as FieldError
                  )}
                  placeholder="ภาษาไทย หรือ ภาษาอังกฤษ"
                  type="text"
                />
              </div>
            </div>
            <div style={{ width: "100%" }} className="mb-3">
              <div>
                อีเมล
                <abbr className="required" title="ต้องการ">
                  *
                </abbr>
              </div>
              <Input
                style={{ width: "100%" }}
                {...register("email", { required: true })}
                isInvalid={errors.name?.type === "required"}
                errorMessages={errorMessages(
                  "email",
                  errors.name as FieldError
                )}
                placeholder="โปรดระบุอีเมลที่ใช้งานจริง เพื่อรับรหัสผ่านของคุณ"
                type="email"
              />
            </div>
            <div style={{ width: "100%" }} className="mb-3">
              <div>
                โทรศัพท์
                <abbr className="required" title="ต้องการ">
                  *
                </abbr>
              </div>
              <Input
                style={{ width: "100%" }}
                {...register("tel", { required: true })}
                isInvalid={errors.name?.type === "required"}
                errorMessages={errorMessages("tel", errors.name as FieldError)}
                placeholder="โปรดระบุเบอร์โทรติดต่อ"
                type="tel"
              />
            </div>
            <div style={{ width: "100%" }} className="mb-3">
              <div>อีเมลเพื่อนที่แนะนำ (ถ้ามี)</div>
              <input
                onChange={() => {}}
                style={{ width: "100%" }}
                placeholder="กรุณาระบุอีเมลผู้ใช้งาน Cariber ปัจจุบันที่แนะนำคุณ"
                type="text"
              />
            </div>
            <div style={{ width: "100%" }} className="mb-3">
              หมายเหตุ : หากพบปัญหาหรือมีข้อสงสัยสามารถติดต่อได้ที่แชท Facebook
              page : Cariber หรือ email : contact@cariber.co หรือโทร
              095-754-7424
            </div>
          </div>
          <div className="w-50">
            <div className="ml-3">
              <h3 className="fs-md">รายการสั่งซื้อของคุณ</h3>
              <div className="grid">
                <div className="bg-column inside-data">
                  <b>สินค้า</b>
                </div>
                <div className="bg-column inside-data">
                  <b>มูลค่า</b>
                </div>
                <div className="inside-data"> Annual Subscription *1</div>
                <div className="inside-data"> 5000.00 ฿</div>
                <div className="inside-data bg-column">
                  <b>คูปอง :career92</b>
                </div>
                <div className="inside-data">
                  -1,400.00 <span style={{ color: " #7f54b3" }}>[ลบออก]</span>
                </div>
                <div className="inside-data bg-column">
                  <b>รวม</b>
                </div>
                <div className="inside-data">
                  <b>3600.00 ฿</b>
                </div>
              </div>
              <p style={{ marginTop: "50px" }}>
                ต่ออายุและหักชำระอัตโนมัติทุกปี (สามารถยกเลิกได้ทุกเมื่อ)
                <br />
                เมื่อกด “สั่งซื้อ” ห้ามปิดหรือรีเฟรชเว็บไซต์
                จนกว่าการชำระเงินจะสำเร็จ
              </p>
              <label>
                หมายเลขบัตรเครดิต / เดบิต<span className="required">*</span>
              </label>
              <div className="w-100">
                <Input
                  className="w-100 card-number"
                  {...register("creditCard", {
                    required: true,
                    maxLength: 16,
                    minLength: 16,
                  })}
                  isRequired={true}
                  isInvalid={errors.name?.type === "required"}
                  errorMessages={errorMessages(
                    "creditCard",
                    errors.name as FieldError
                  )}
                  autoComplete="cc-number"
                  autoCorrect="no"
                  autoCapitalize="no"
                  type="tel"
                  placeholder="•••• ••••• •••• ••••"
                  maxLength={16}
                />
              </div>
              <div className="d-flex content-between">
                <div className="w-48 ">
                  <label>
                    เดือนและปีที่หมดอายุ<span className="required">*</span>
                  </label>
                  <div>
                    <Input
                      {...register("expired", {
                        required: true,
                      })}
                      isInvalid={errors.name?.type === "required"}
                      errorMessages={errorMessages(
                        "expired",
                        errors.name as FieldError
                      )}
                      type="tel"
                      placeholder="MM / YY"
                      maxLength={4}
                    />
                  </div>
                </div>
                <div className="w-48 ">
                  <label>
                    รหัสหลังบัตร 3 ตัว (CVC)
                    <span className="required">*</span>
                  </label>
                  <div>
                    <Input
                      {...register("CVC", {
                        required: true,
                      })}
                      isRequired={true}
                      isInvalid={errors.name?.type === "required"}
                      errorMessages={errorMessages(
                        "CVC",
                        errors.name as FieldError
                      )}
                      type="password"
                      placeholder="CVC"
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 mb-5">
                <button className="w-100" type="submit">
                  สั่งซื้อ
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;

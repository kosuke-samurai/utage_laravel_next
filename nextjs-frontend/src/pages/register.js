import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const [name, setName] = useState('')

    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const [title, setTitle] = useState('')
    const [hl_image, setHl_image] = useState('')
    const [main_image, setMain_image] = useState('')
    const [body, setBody] = useState('')
    const [kokopoi_question, setKokopoi_question] = useState('')
    const [kokopoi_answer, setKokopoi_answer] = useState('')
    const [emb_img_title, setEmb_img_title] = useState('')
    const [emb_img, setEmb_img] = useState('')

    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,

            password,
            password_confirmation: passwordConfirmation,

            title,
            hl_image,
            main_image,
            body,
            kokopoi_question,
            kokopoi_answer,
            emb_img_title,
            emb_img,

            setErrors,
        })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                }>
                <form onSubmit={submitForm} encType="multipart/form-data">
                    {/* Name */}
                    <div>
                        <Label htmlFor="name">Name</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block mt-1 w-full"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>


                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <InputError
                            messages={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mt-4">
                        <Label htmlFor="passwordConfirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            className="block mt-1 w-full"
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError
                            messages={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>


                    {/* トピ見出 */}
                    <div>
                        <Label htmlFor="title">トピ見出し（15.5文字）</Label>

                        <Input
                            id="title"
                            type="text"
                            value={title}
                            className="block mt-1 w-full"
                            onChange={event => setTitle(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.title} className="mt-2" />
                    </div>

                    {/* 見出し写真（正方形） */}
                    <div>
                        <Label htmlFor="hl_image">見出し写真（正方形）</Label>

                        <Input
                            id="hl_image"
                            name="hl_image"
                            type="file"
                            accept='image/*'
                            value={hl_image}
                            className="block mt-1 w-full"
                            onChange={event => setHl_image(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.hl_image} className="mt-2" />
                    </div>

                    {/* メイン写真 */}
                    <div>
                        <Label htmlFor="main_image">トピ詳細写真（長方形）</Label>

                        <Input
                            id="main_image"
                            name="main_image"
                            type="file"
                            accept='image/*'
                            value={main_image}
                            className="block mt-1 w-full"
                            onChange={event => setMain_image(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.main_image} className="mt-2" />
                    </div>

                    {/* リード */}
                    <div>
                        <Label htmlFor="body">リード（HL本文）</Label>

                        <Input
                            id="body"
                            type="text"
                            value={body}
                            className="block mt-1 w-full"
                            onChange={event => setBody(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.body} className="mt-2" />
                    </div>

                    {/* 関連リンク（Q） */}
                    <div>
                        <Label htmlFor="kokopoi_question">関連リンク（Q）</Label>

                        <Input
                            id="kokopoi_question"
                            type="text"
                            value={kokopoi_question}
                            className="block mt-1 w-full"
                            onChange={event => setKokopoi_question(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.kokopoi_question} className="mt-2" />
                    </div>

                    {/* 関連リンク（A） */}
                    <div>
                        <Label htmlFor="kokopoi_answer">関連リンク（A）</Label>

                        <Input
                            id="kokopoi_answer"
                            type="text"
                            value={kokopoi_answer}
                            className="block mt-1 w-full"
                            onChange={event => setKokopoi_answer(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.kokopoi_answer} className="mt-2" />
                    </div>

                    {/* エンべ画像見出し */}
                    <div>
                        <Label htmlFor="emb_img_title">エンべ画像見出し</Label>

                        <Input
                            id="emb_img_title"
                            type="text"
                            value={emb_img_title}
                            className="block mt-1 w-full"
                            onChange={event => setEmb_img_title(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.emb_img_title} className="mt-2" />
                    </div>

                    {/* エンべ画像 */}
                    <div>
                        <Label htmlFor="emb_img">エンべ画像</Label>

                        <Input
                            id="emb_img"
                            name="emb_img"
                            type="file"
                            accept='image/*'
                            value={emb_img}
                            className="block mt-1 w-full"
                            onChange={event => setEmb_img(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.emb_img} className="mt-2" />
                    </div>


                    <div className="flex items-center justify-end mt-4">
                        <Link
                            href="/login"
                            className="underline text-sm text-gray-600 hover:text-gray-900">
                            Already registered?
                        </Link>

                        <Button className="ml-4">Register</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Register

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Phone, MessageSquare, Lock, RefreshCw } from 'lucide-react';
import {
  setPhoneNumber,
  setOtp,
  sendOtpStart,
  sendOtpSuccess,
  verifyOtpStart,
  verifyOtpSuccess,
  clearError,
  sendOtpFailure,
  verifyOtpFailure
} from '../../components/store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const OTPLogin = () => {
  const dispatch = useDispatch();
  const { phoneNumber, otp, otpSent, loading, error } = useSelector(state => state.auth);

  const handleSendOtp = async () => {
    if (phoneNumber.length === 10) {
      dispatch(sendOtpStart());
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch(sendOtpSuccess());
      } catch (err) {
        dispatch(sendOtpFailure('Failed to send OTP. Please try again.'));
      }
    }
  };
const navigate = useNavigate();
 const handleVerifyOtp = async () => {
  if (otp.length === 6) {
    dispatch(verifyOtpStart());
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      dispatch(verifyOtpSuccess({ 
        name: 'MLA Name', 
        phone: phoneNumber,
        constituency: 'Sample Constituency',
        id: '12345'
      }));
      // Navigate immediately after successful verification
      navigate('/');
    } catch (err) {
      dispatch(verifyOtpFailure('Invalid OTP. Please try again.'));
    }
  }
};

  const handleResendOtp = async () => {
    dispatch(clearError());
    await handleSendOtp();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-sky-600 rounded-3xl mb-6 shadow-2xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Secure Login</h1>
          <p className="text-gray-600">MLA Portal Authentication</p>
        </div>

        {/* Main Card */}
        <Card className="backdrop-blur-xl bg-white/80 border-0 shadow-2xl">
          <CardHeader className="pb-6">
            <CardTitle className="text-center text-xl font-semibold text-gray-800">
              {!otpSent ? 'Enter Your Phone Number' : 'Verify OTP'}
            </CardTitle>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mx-auto mt-2"></div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {error && (
              <Alert className="border-red-200 bg-red-50/80 backdrop-blur-sm">
                <AlertDescription className="text-red-700 font-medium">
                  {error}
                </AlertDescription>
              </Alert>
            )}
            
            {!otpSent ? (
              <>
                {/* Phone Number Input */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    Phone Number
                  </label>
                  <div className="relative">
                    <Input
                      type="tel"
                      placeholder="Enter 10-digit phone number"
                      value={phoneNumber}
                      onChange={(e) => dispatch(setPhoneNumber(e.target.value.replace(/\D/g, '')))}
                      maxLength={10}
                      disabled={loading}
                      className="pl-12 h-12 bg-white/70 border-blue-200 focus:border-blue-400 focus:ring-blue-400/20 backdrop-blur-sm text-lg font-medium"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <span className="text-gray-500 font-medium">+91</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 pl-1">
                    We'll send you a verification code via SMS
                  </p>
                </div>

                <Button 
                  onClick={handleSendOtp}
                  disabled={phoneNumber?.length !== 10 || loading}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending OTP...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Send OTP
                    </div>
                  )}
                </Button>
              </>
            ) : (
              <>
                {/* OTP Input */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-600" />
                    Enter Verification Code
                  </label>
                  
                  <div className="text-center p-4 bg-blue-50/80 rounded-xl backdrop-blur-sm border border-blue-100">
                    <p className="text-sm text-gray-600 mb-1">
                      Verification code sent to
                    </p>
                    <p className="font-semibold text-blue-700">
                      +91 {phoneNumber.replace(/(\d{5})(\d{5})/, '$1 $2')}
                    </p>
                  </div>

                  <Input
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => dispatch(setOtp(e.target.value.replace(/\D/g, '')))}
                    maxLength={6}
                    disabled={loading}
                    className="h-12 bg-white/70 border-blue-200 focus:border-blue-400 focus:ring-blue-400/20 backdrop-blur-sm text-center text-xl font-bold tracking-widest"
                  />
                </div>

                <Button 
                  onClick={handleVerifyOtp}
                  disabled={otp?.length !== 6 || loading}
                  className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Verifying...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Verify & Login
                    </div>
                  )}
                </Button>

                <Button 
                  variant="outline"
                  onClick={handleResendOtp}
                  disabled={loading}
                  className="w-full h-12 bg-white/70 border-blue-300 hover:bg-blue-50 text-blue-700 font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 disabled:opacity-50"
                >
                  <div className="flex items-center gap-2">
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Resend OTP
                  </div>
                </Button>
              </>
            )}

            {/* Security Note */}
            <div className="text-center pt-4 border-t border-blue-100">
              <p className="text-xs text-gray-500">
                🔒 Your information is secure and encrypted
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Having trouble? Contact support</p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="fixed top-1/4 left-8 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
      <div className="fixed bottom-1/4 right-8 w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse opacity-50"></div>
      <div className="fixed top-1/2 left-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-40"></div>
    </div>
  );
};

export default OTPLogin;